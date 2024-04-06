module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_ZLFdSJQzRYWwss3x1J7KZh0oHgCy/PV74hnNLG9",
      apiToken: "eOzQetUAITtasugpYBikVFSw",
      appFilter: "backend-charline-strapi",
      teamFilter: "team_aKzU1z4ZLh1n3k4DRaa4OmIQ",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::project.project",
          draft: {
            url: "http://localhost:3000/api/preview",
          },
          published: {
            url: "http://localhost:3000/api/preview",
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
