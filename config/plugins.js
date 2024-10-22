module.exports = ({ env }) => ({
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::project.project",
          draft: {
            url: env("PROJECTS_PREVIEW_URL"),
          },
          published: {
            url: env("PROJECTS_PREVIEW_URL"),
          },
        },
        {
          uid: "api::page.page",
          draft: {
            url: env("PAGES_PREVIEW_URL"),
          },
          published: {
            url: env("PAGES_PREVIEW_URL"),
          },
        },
      ],
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },
});
