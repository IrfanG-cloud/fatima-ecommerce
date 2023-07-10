import { defineField } from "sanity";

export const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields:[
        {
            name:"title",
            title: "Title",
            type: "string"
        },
        {
            name:"description",
            title: "Product Description",
            type: "string"
        },
        {
            name:"price",
            title: "Product Price",
            type: "number"
        },
        {
            name:"image",
            title: "Product Image",
            type: "image",
        },
            defineField({
                name: "category",
                title: "Product Category",
                type: "reference",
                to: [
                    {
                        type: "category",
                    }
                ]
            })
    ]
}