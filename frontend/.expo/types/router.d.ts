/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/welcome`; params?: Router.UnknownInputParams; } | { pathname: `/campus/campusService`; params?: Router.UnknownInputParams; } | { pathname: `/company/companyService`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/api/campusApi`; params?: Router.UnknownInputParams; } | { pathname: `/api/companyApi`; params?: Router.UnknownInputParams; } | { pathname: `/api/studentApi`; params?: Router.UnknownInputParams; } | { pathname: `/campus/campus-dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/campus/CampusLogin`; params?: Router.UnknownInputParams; } | { pathname: `/campus/CampusSignup`; params?: Router.UnknownInputParams; } | { pathname: `/company/company-dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/company/CompanyLogin`; params?: Router.UnknownInputParams; } | { pathname: `/company/CompanySignup`; params?: Router.UnknownInputParams; } | { pathname: `/student/student-dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/student/StudentLogin`; params?: Router.UnknownInputParams; } | { pathname: `/student/Studentsignup`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/welcome`; params?: Router.UnknownOutputParams; } | { pathname: `/campus/campusService`; params?: Router.UnknownOutputParams; } | { pathname: `/company/companyService`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/api/campusApi`; params?: Router.UnknownOutputParams; } | { pathname: `/api/companyApi`; params?: Router.UnknownOutputParams; } | { pathname: `/api/studentApi`; params?: Router.UnknownOutputParams; } | { pathname: `/campus/campus-dashboard`; params?: Router.UnknownOutputParams; } | { pathname: `/campus/CampusLogin`; params?: Router.UnknownOutputParams; } | { pathname: `/campus/CampusSignup`; params?: Router.UnknownOutputParams; } | { pathname: `/company/company-dashboard`; params?: Router.UnknownOutputParams; } | { pathname: `/company/CompanyLogin`; params?: Router.UnknownOutputParams; } | { pathname: `/company/CompanySignup`; params?: Router.UnknownOutputParams; } | { pathname: `/student/student-dashboard`; params?: Router.UnknownOutputParams; } | { pathname: `/student/StudentLogin`; params?: Router.UnknownOutputParams; } | { pathname: `/student/Studentsignup`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/welcome${`?${string}` | `#${string}` | ''}` | `/campus/campusService${`?${string}` | `#${string}` | ''}` | `/company/companyService${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/api/campusApi${`?${string}` | `#${string}` | ''}` | `/api/companyApi${`?${string}` | `#${string}` | ''}` | `/api/studentApi${`?${string}` | `#${string}` | ''}` | `/campus/campus-dashboard${`?${string}` | `#${string}` | ''}` | `/campus/CampusLogin${`?${string}` | `#${string}` | ''}` | `/campus/CampusSignup${`?${string}` | `#${string}` | ''}` | `/company/company-dashboard${`?${string}` | `#${string}` | ''}` | `/company/CompanyLogin${`?${string}` | `#${string}` | ''}` | `/company/CompanySignup${`?${string}` | `#${string}` | ''}` | `/student/student-dashboard${`?${string}` | `#${string}` | ''}` | `/student/StudentLogin${`?${string}` | `#${string}` | ''}` | `/student/Studentsignup${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/welcome`; params?: Router.UnknownInputParams; } | { pathname: `/campus/campusService`; params?: Router.UnknownInputParams; } | { pathname: `/company/companyService`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/api/campusApi`; params?: Router.UnknownInputParams; } | { pathname: `/api/companyApi`; params?: Router.UnknownInputParams; } | { pathname: `/api/studentApi`; params?: Router.UnknownInputParams; } | { pathname: `/campus/campus-dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/campus/CampusLogin`; params?: Router.UnknownInputParams; } | { pathname: `/campus/CampusSignup`; params?: Router.UnknownInputParams; } | { pathname: `/company/company-dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/company/CompanyLogin`; params?: Router.UnknownInputParams; } | { pathname: `/company/CompanySignup`; params?: Router.UnknownInputParams; } | { pathname: `/student/student-dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/student/StudentLogin`; params?: Router.UnknownInputParams; } | { pathname: `/student/Studentsignup`; params?: Router.UnknownInputParams; };
    }
  }
}
