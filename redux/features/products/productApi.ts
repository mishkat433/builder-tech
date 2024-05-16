import { api } from "@/redux/api/apiSlice";


const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/Product',
        }),
        singleProduct: builder.query({
            query: (id) => `/product/${id}`,
        }),
        postComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/comment/${id}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['refetchComments']
        }),
        getComments: builder.query({
            query: (id) => `/comment/${id}`,
            providesTags: ['refetchComments']
        })
    })
})

export const { useGetProductsQuery, useSingleProductQuery, usePostCommentMutation, useGetCommentsQuery } = productApi;