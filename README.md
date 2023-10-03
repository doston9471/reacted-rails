# Ruby on Rails with React app
## Installation and run Ruby on Rails app
```
git clone git@github.com:doston9471/reacted-rails.git
cd reacted-rails
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
```
## Installation and run React app
```bash
cd client
npm install
touch .env.development
# add VITE_API_URL="<your Ruby on Rails app server URL>"
npm run dev
```
### TODO
#### Ruby on Rails
- [x] Create Rails api only project, choose db different than sqlite
- [x] Create Employee model. Fields: Name, Salary, Total
- [x] Create Project model. Fields: Name
- [x] Create Assignment model. Fields: Months, RnD Percentage, Total, belongs_to both employee, project
- [x] Assignment's total is a calculated field and should be updated everytime either months or RnD Percentage is updated ((months * rnd_percentage) / 12)
- [x] Total for employee should be the sum for all assignments belonging to the employee and should be updated everytime assignment belonging to the employee is updated
- [x] Add Contractor model. Fields: Name, Salary, Total
- [x] Make Assignment belong to either Contractor or Employee
- [x] Create endpoints for Assignment ( create, update, index, show )
- [x] Create endpoints for Employee ( show, index )
#### JavaScript
- [x] Create empty React project.
- [x] Add React Router to the project
- [x] List Employees to the homepage
- [x] Show Employee page
- [x] List all assignments inside Employee show page
- [ ] Update assignments on change and show the updated Employee total value