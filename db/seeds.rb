p "Database seeding started..."
Employee.destroy_all
Contractor.destroy_all
Project.destroy_all
Assignment.destroy_all
p "All previous data deleted!!!"
p "Creating Employees..."
# Create some employees and contractors
employee1 = Employee.create(name: 'Employee 1', salary: 50000)
employee2 = Employee.create(name: 'Employee 2', salary: 60000)
p "Creating Contractors..."
contractor1 = Contractor.create(name: 'Contractor 1', salary: 70000)
contractor2 = Contractor.create(name: 'Contractor 2', salary: 75000)

p "Creating Projects..."
# Create some projects
project1 = Project.create(name: 'Project A')
project2 = Project.create(name: 'Project B')

p "Creating Assignments for employees..."
# Create assignments for employees
Assignment.create(months: 6, rnd_percentage: 50, assignable: employee1, project: project1)
Assignment.create(months: 9, rnd_percentage: 40, assignable: employee1, project: project2)
Assignment.create(months: 7, rnd_percentage: 60, assignable: employee2, project: project1)

p "Creating Assignments for contractors..."
# Create assignments for contractors
Assignment.create(months: 4, rnd_percentage: 30, assignable: contractor1, project: project1)
Assignment.create(months: 8, rnd_percentage: 25, assignable: contractor1, project: project2)
Assignment.create(months: 5, rnd_percentage: 35, assignable: contractor2, project: project1)

p "Database seeding finished!!!"