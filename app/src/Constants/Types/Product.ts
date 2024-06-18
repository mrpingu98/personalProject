export type AddProductPayload = {
    name: string,
    description: string,
    price: number,
    imageUrl: string
}

export type EditProductPayload = {
    name: string,
    newName: string | null,
    description: string | null,
    price: number | null,
    imageUrl: string | null
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

export type EditDialogInitialValues = {
    id: string,
    product: string,
    description: string,
    price: number,
    imageUrl: string
}