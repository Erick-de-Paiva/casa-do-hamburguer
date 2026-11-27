import type { Request, Response } from "express"
import { prisma } from "../db.js"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany()

        if (products.length === 0) {
            res.status(404).json({ message: "Não foram encontrados produtos" })
            return
        }

        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor" })
        return
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { user } = req
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id

        if (!user?.admin) {
            res.status(400).json({ message: "Usuário não autorizado" })
            return
        }

        if (!id) {
            res.status(400).json({ message: "ID não encontrado" })
            return
        }

        const deletedProduct = await prisma.product.delete({
            where: { id }
        })

        if (!deletedProduct) {
            res.status(404).json({ message: "Erro ao deletar produto" })
            return
        }

        res.json({ message: "Produto deletado com sucesso", deletedProduct })
    } catch (error: any) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Produto não encontrado" })
            return
        }

        res.status(500).json({ message: "Erro no servidor" })
        return
    }
}
