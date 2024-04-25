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