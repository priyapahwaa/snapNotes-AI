//upload file to convex storage

import { mutation, query } from "./_generated/server";
import {v} from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
//logic to store file in the database
export const AddfileEntry = mutation({
    args: {
        storageId: v.string(),
        fileId: v.string(),
        fileName: v.string(),
        createdBy: v.string(),
        fileUrl: v.string(),
    },
    handler: async (ctx, args) => {
        const result=await ctx.db.insert("pdfFiles", {
            storageId: args.storageId,
            fileId: args.fileId,
            fileName: args.fileName,
            createdBy: args.createdBy,
            fileUrl: args.fileUrl,
        });
        return "inserted";
    },
});

//get fileurl
export const getFileUrl = mutation({
    args: {
        storageId: v.string(),
    },
    handler: async (ctx, args) => {
        const url=await ctx.storage.getUrl(args.storageId);
        return url;
    },
})
export const GetFileRecord = query({
    args: {
        fileId: v.string(),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query("pdfFiles")
            .filter((q) => q.eq(q.field("fileId"), args.fileId))
            .collect();  
        return result;
    },
});

export const GetUseriles = query({
    args: {
        userEmail: v.string()
    },
    handler: async (ctx, args) => {

        if (!args.userEmail) {
            return [];
        }
        const result = await ctx.db.query("pdfFiles")
            .filter((q) => q.eq(q.field("createdBy"), args?.userEmail))
            .collect();
        return result;
    }
});

// export const DeleteFile = mutation({
//     args: {
//         fileId: v.string(),
//     },
//     handler: async (ctx, args) => {
//         try {
//             // Delete the file from database
//             await ctx.db.delete(args.fileId);
//             return { success: true };
//         } catch (error) {
//             return { 
//                 success: false, 
//                 error: error.message 
//             };
//         }
//     }
// });

export const DeleteFile = mutation({
    args: {
        fileId: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            // Find the document by fileId
            const fileRecord = await ctx.db.query("pdfFiles")
                .filter((q) => q.eq(q.field("fileId"), args.fileId))
                .first();  

            if (!fileRecord) {
                return { success: false, error: "File not found" };
            }

            // Delete the document using its _id
            await ctx.db.delete(fileRecord._id);
            return { success: true };
        } catch (error) {
            return { 
                success: false, 
                error: error.message 
            };
        }
    }
});