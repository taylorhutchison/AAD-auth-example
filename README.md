# Auth Example

This is a sample application showing how an Angular client and ASP.NET Core API can use Azure Active Directory for authentication and authorization.

## Concept

This example site simulates a "Concert in the Park" site. It advertises to the public dates and details of upcoming concerts. There are three main areas of the site:
- Home - this section has the details of the upcoming concerts and can be read by anyone.
- Tickets - this section allows you to reserve tickets, and requires authorization, but not a specific role
- Admin - this section allows you to add, modify, or delete concerts, and requires you to authenticate and be in the "Admin role".