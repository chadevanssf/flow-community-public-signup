# flow-community-public-signup

Want to have users sign up, without having to log in or register? This is a simple example of capturing limited user data and generating a url that they can return to, that shows their items they signed up for.

## Development

1. Log into DevHub, if not already logged in
1. Create a scratch org
    ```sh
    sfdx force:org:create -f config/project-scratch-def.json -a signuporg -s
    ```
1. Ensure Communities is enabled, and Enable ExperienceBundle Metadata API is True
    * Setup > Feature Settings > Communities > Communities Settings
1. Deploy Source
    ```sh
    sfdx force:source:push -u signuporg
    ```
1. Assign permission set
    ```sh
    sfdx force:user:permset:assign -u signuporg -n SignUp
    ```
1. Set Default Data
    ```sh
    sfdx force:data:tree:import -u signuporg -p ./data/Data-plan.json
    ```
1. Open the Scratch Org
    ```sh
    sfdx force:org:open -u signuporg
    ```

### Development

Some additional commands helpful when developing this project.

#### Data Management

```sh
sfdx force:data:tree:export -q ./data/signups.soql -p -d ./data/
sfdx force:data:tree:export -q ./data/newsletters.soql -p -d ./data/
```

Make sure to rebuild Data-plan.json with the combined parents for Newsletter Subscriptions.