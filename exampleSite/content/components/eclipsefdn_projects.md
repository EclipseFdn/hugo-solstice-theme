---
Title: Eclipse Foundation Projects
hide_sidebar: true
---

Using the `eclipsefdn_projects.yaml` generated as part of the installation of the theme, this component will display a list of projects retrieved from the Eclipse Foundation projects API. This set of projects can be filtered by setting the  parameter `projects_working_group` to the machine name of the working group to filter on. This field accepts only a single string value.

**Examples:**

Following list of projects has been filtered using the working group "jakarta-ee":

{{< eclipsefdn_project_list projects_working_group="jakarta-ee" >}}