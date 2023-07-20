const employee = {
    name: 'Giorgi Melikidze',
    streetAddress: '111 Random street',
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee }; 
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  const updatedEmployeeNonDestructive = updateEmployeeWithKeyAndValue(employee, 'age', 30);
  console.log(updatedEmployeeNonDestructive);
  
  const updatedEmployeeDestructive = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak Street');
  console.log(updatedEmployeeDestructive);
  
  const employeeAfterDeletionNonDestructive = deleteFromEmployeeByKey(employee, 'name');
  console.log(employeeAfterDeletionNonDestructive);
  
  const employeeAfterDeletionDestructive = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(employeeAfterDeletionDestructive);
  
  console.log(employee);