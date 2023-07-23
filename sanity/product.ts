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
        {
            name:"size",
            title: "Sizes",
            type: "array",
            of: [{ type: 'string'}]
        },
        {
            name:"quantity",
            title: "Quantity",
            type: "number",
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