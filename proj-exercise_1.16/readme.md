1. Image tagged as `registry.heroku.com/my-app/web`
  -- main instructions below!

2. Create a `Dockerfile` with necessary information. Then create an app on heroku site.

3. **Build and publish to docker ** to `heroku-container-registry` via below command - 

  `heroku container:push web -a my-app-789` (If it doesn't work, try logging in first via `heroku container:login` command)

4. **Deploy app** the changes via below command:

   `heroku container:release web -a my-app-789`

Deployed at https://my-app-789.herokuapp.com/

For any help on publishing visit: https://devcenter.heroku.com/articles/container-registry-and-runtime
