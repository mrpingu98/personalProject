export type AddProductPayload = {
    name: string,
    description: string,
    price: number,
    imageUrl: string
}

export type EditProductPayload = {
    name: string,
    newName?: string,
    description?: string,
    price?: number,
    imageUrl?: string
}

export type DeleteProductPayload = {
    name: string
}

export type ProductResponse = {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string
}

export type ProductTableRows = {
    id: string,
    product: string,
    description: string,
    price: number
}