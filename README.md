# flow-community-public-signup

Want to have users sign up, without having to log in or register? This is a simple example of capturing limit user data and generating a url that they can return to, that shows their items they signed up for.

## Development

### Scratch Org Deployment

```sh
sfdx force:user:permset:assign -n SignUp
sfdx force:data:tree:import -p ./data/Data-plan.json
```

### Development

```sh
sfdx force:data:tree:export -q ./data/signups.soql -p -d ./data/
sfdx force:data:tree:export -q ./data/newsletters.soql -p -d ./data/
```

Make sure to rebuild Data-plan.json with the combined parents for Newsletter Subscriptions.