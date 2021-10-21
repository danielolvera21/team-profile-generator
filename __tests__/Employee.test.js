const Employee = require('../lib/Employee.js');

test('create employee', () => {
    const employee = new Employee('Daniel', 1, 'daniel@daniel.com');

    expect(employee.name).toBe('Daniel');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})