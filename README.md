<div align="center">

![Cover](https://imgur.com/c3k2867.png)

![Github stars](https://img.shields.io/github/stars/crane-cele/kamil-portfolio?style=flat-square)
![Github Forks](https://img.shields.io/github/forks/crane-cele/kamil-portfolio?style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/crane-cele/kamil-portfolio?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/crane-cele/kamil-portfolio?style=flat-square)

</div>

## Tools Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)

- **Database**: [Supabase](https://supabase.com/)
- **Animations**: [Framer Motion](https://framer.com/motion)
- **Deployment**: [Vercel](https://vercel.com)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Plugins**: [rehype](https://github.com/rehypejs/rehype)
- **Analytics**: [Google Analytics](https://analytics.google.com/analytics/web/)
- [SWR](https://swr.vercel.app/)
- [Email.js](https://www.emailjs.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify)

## Run Locally

Clone the project:

```bash
git clone https://github.com/crane-cele/kamil-portfolio.git
```

Go to the project directory:

```bash
cd kamil-portfolio
```

Install dependencies

```bash
yarn
# or
npm install
```

Start the server:

```bash
yarn dev
# or
npm run dev
```

After that server should be running on [localhost:3000](http://localhost:3000)

> I am using [yarn](https://yarnpkg.com/) you can use [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

> Warning: You could run into errors if you don't populate the `.env.local` with the correct values

## Setting up the Environment

Rename [`.env.example`](/.env.example) to `.env.local` and then you need to populate that with the respective values.

### Email Service Integration

- `NEXT_PUBLIC_YOUR_SERVICE_ID`: Go to the [Admin Panel](https://dashboard.emailjs.com/admin) of [emailjs.com](https://emailjs.com). If you haven't already added a service then Click on the **Add Service** Button as shown in the image

  ![](https://i.imgur.com/bK5wzkD.png)

  Then choose any method you want I am using **Gmail**

  ![](https://i.imgur.com/zTrFCNJ.png)

  - Then first click on the **Connect Account and log** in with your Gmail account that you want to use to get the emails from.
  - In the second step click on **Create Service** and then copy the **Service ID** and add this ID to `NEXT_PUBLIC_YOUR_SERVICE_ID` in `.env.local`

    ![](https://i.imgur.com/c8ZkUf5.png)

- `NEXT_PUBLIC_YOUR_TEMPLATE_ID`: To get the Template ID visit the [Email Templates](https://dashboard.emailjs.com/admin/templates) section and click on **Create New Template**.

  ![](https://i.imgur.com/TQLrQuz.png)

  And then you will see a window where you can edit your email template after you are satisfied with your template then click on the Save button in the top right corner.

  ![](https://i.imgur.com/98adqhN.png)

  After that you will have your Template ID as shown in the image below:

  ![](https://i.imgur.com/pcqKu3f.png)

- `NEXT_PUBLIC_YOUR_USER_ID`: To get your User ID, Go to [Account](https://dashboard.emailjs.com/admin/account) and then you will be able to see it:

  ![](https://i.imgur.com/oU3tBiY.png)

### Google Analytics

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: You can follow this [guide](https://support.google.com/analytics/answer/9539598?hl=en) to get your Google Analytics ID and then you will be able to use Google Analytics in this project.

### Supabase Integration

I am using [Supabase](https://supabase.com/) with ISR to store all my projects for now. It provides an API that helps you to access the data. To access that data you need two things:

- `SUPABASE_URL`: Database URL.
- `SUPABASE_KEY`: It is safe to be used in a browser context.

**Steps-**

- To get these go to [Supabase](https://app.supabase.com/sign-in) and log in with your account.

- Click on **New Project** and fill all the fields.

- Click on **Create New Project**.

- Go to the [Settings](https://app.supabase.com/project/_/settings/general) page in the Dashboard.

- Click **API** in the sidebar.

- Find your API **URL** and **anon** key on this page.

- Now you can [Create table](https://app.supabase.com/project/_/editor) and start using it.

  But before you use this there was one issue I had when I was using this it was returning the empty array ([]). It was because of project policies. By default, no-one has access to the data. To fix that you can do the following:

- Go to [Policies](https://app.supabase.com/project/_/auth/policies).

- Select your Project.

- Click on **New Policy**.

  ![](https://i.imgur.com/RsGd8oW.png)

- You will be presented with two options. You can choose either one. I chose the 1st option:

  ![](https://i.imgur.com/QDAePUQ.png)

- After that, you will have four options as shown in the following image. You can choose according to your need. I only need the read access so I went with 1st option.

  ![](https://i.imgur.com/h1hSivF.png)

- Click on **Use this template**.

- Click on **Review**.

- Click on **Save Policy**

  After that, you will be able to access the data using [@supabase/supabase-js](https://www.npmjs.com/package/@supabase/supabase-js). Install it and you just set up your project with Supabase.

- `REVALIDATE_SECRET`: As I am using [Supabase](https://supabase.com/), It has a feature called [webhooks](https://supabase.com/docs/guides/database/webhooks) which allow you to send real-time data from your database to another system whenever a table event occurs. So I am using it to revalidate my `projects` page. For that I am providing a custom secret value to verify that request is coming from authenticated source. Let's create webhook:

  - Go to [webhooks](https://app.supabase.com/project/_/database/hooks) page.
  - Click on **Create a new hook**
  - Enter the name of the function hook (example: `update_projects`)

    ![](https://i.imgur.com/QAYIkKZ.png)

  - Choose your table from the dropdown list

    ![](https://i.imgur.com/Hspecbe.png)

  - Select events which will trigger this function hook

    ![](https://i.imgur.com/OYq1qcg.png)

  - Now Choose POST method and enter the revalidate URL (request will be sent to this URL)

    ![](https://i.imgur.com/lpicIsR.png)

  - Then add two HTTP Params `secret` and `revalidateUrl`

  ![](https://i.imgur.com/Mw1Ia0o.png)

  - Now add this secret to your `env.local` and it will update the page when you made some changes to your supabase database.
  - `pages/api/revalidate.ts` is using `revalidateUrl` to update the page with new data.

### GitHub Integration

To get `GITHUB_TOKEN` Follow these steps to generate a GitHub token that I am using fetch my GitHub details:

**Step 1: Accessing GitHub Developer Settings**

- Log in to your GitHub account.
- Click on your profile picture in the top-right corner of the page.
- From the drop-down menu, select Settings.

![](https://i.imgur.com/h7jtNeH.png)

**Step 2: Navigating to Developer Settings**

In the left sidebar, scroll down and click on Developer settings.

![](https://i.imgur.com/JHFdEhP.png)

**Step 3: Creating a New Personal Access Token**

- In the Developer settings page, click on Personal access tokens and then Click on Tokens (Classic).

  ![](https://i.imgur.com/f2eY9vB.png)

- Next, click on the Generate new token button.

  ![](https://i.imgur.com/V7gBKQh.png)

- After selecting the necessary permissions, click on the Generate token button at the bottom of the page.
- GitHub will generate a new token for you. Make sure to copy the token value.
- **Important**: Treat this token like a password and keep it secure. Do not share it publicly or commit it to a version control repository.

### Email Validation Integration

To get `EMAIL_VALIDATION_API` follow the following steps to get the `API_KEY` to validate the email address:

- You need to have an account on [RapidAPI](https://rapidapi.com/).
- If you have an account then you can just [subscribe](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain/pricing) the free version of [E-mail Check Invalid or Disposable Domain](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain/). Which will give you the 1000 request/month.

  ![Rapid API-1](https://imgur.com/OMFF69O.png)

- Then you'll get the `API_KEY`, which you can store in your `.env.local`.

  ![Rapid API-2](https://imgur.com/REdKVsX.png)

### Sanity Integration

- `SANITY_PROJECT_ID`:

  - Go to the [Sanity.io](<(https://www.sanity.io/)>) website using your web browser.
  - Login with you account/Create a new account.
  - After logging in, you'll be redirected to the Sanity.io dashboard.
  - If you have an existing project, you'll see it listed on the dashboard. Click on the project's name to access it.
  - Once you're inside the project, look at the browser's address bar. The URL should look something like this: `https://www.sanity.io/manage/project/your-project-id`
  - The your-project-id in the URL is your Sanity project ID. It's a unique identifier for your specific project.

  That's it! You've now obtained your Sanity project ID, which you can use for interacting with your Sanity project via its API or other integrations.

## Supabase Database Schema

### Table: projects

| Column Name   | Data Type                   | Constraints                                       |
| ------------- | --------------------------- | ------------------------------------------------- |
| `id`          | UUID                        | NOT NULL, PRIMARY KEY, DEFAULT uuid_generate_v4() |
| `created_at`  | TIMESTAMP WITHOUT TIME ZONE | -                                                 |
| `name`        | TEXT                        | -                                                 |
| `description` | TEXT                        | -                                                 |
| `githubURL`   | TEXT                        | -                                                 |
| `previewURL`  | TEXT                        | -                                                 |
| `tools`       | TEXT[]                      | -                                                 |
| `pinned`      | BOOLEAN                     | DEFAULT false                                     |
| `coverImage`  | TEXT                        | -                                                 |

### Table: user_data

| Column Name  | Data Type                | Constraints                                      |
| ------------ | ------------------------ | ------------------------------------------------ |
| `id`         | UUID                     | NOT NULL, PRIMARY KEY, DEFAULT gen_random_uuid() |
| `key`        | TEXT                     | -                                                |
| `value`      | TEXT                     | -                                                |
| `created_at` | TIMESTAMP WITH TIME ZONE | DEFAULT now()                                    |

This table is unique because it accommodates various types of miscellaneous data. I'm sharing the current keys in my database, which are utilized in my project. This will guide you on the types of data you need to add to avoid errors during implementation."

| Keys                   | Sample Data                              |
| ---------------------- | ---------------------------------------- |
| `linkedin`             | [Sample JSON](https://traff.co/K6wi1Q3p) |# kamil-portfolio
