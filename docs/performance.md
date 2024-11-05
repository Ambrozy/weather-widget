Pagespeed analysis:
https://pagespeed.web.dev/analysis/
![mobile performance](./mobile-performance.png)
![desktop performance](./desktop-performance.png)
The long Layout Shift on mobile devices may be due to the fact that we do not render the application until localStorage
returns the initial data to us, but overall the value is in the yellow zone.
