import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const productApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000/"}),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>'stickers'
        }),
        getProguct:builder.query({
            query:productId=>`stickers/${productId}`
        })
    })
})

export const {
    useGetProductsQuery,useGetProguctQuery
}=productApi;