import { apiSlice } from "../ApiSlice/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (data) => {
        const { page } = data;
        return {
          url: `/api/users?page=${page || 1}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },

      providesTags: ["user"],
    }),
    addUser: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `/api/register`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { token, id } = result?.data || {};

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: token,
              user: id,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      providesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery, useSignUpUserMutation } = userApiSlice;
