module.exports = ({ env }) => ({
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::project.project",
          draft: {
            url: "https://charline-portfolio-front-production.up.railway.app",
            query: {
              type: "projects",
              id: "{id}",
            },
          },
          published: {
            url: "https://charline-portfolio-front-production.up.railway.app/projects/{id}",
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
