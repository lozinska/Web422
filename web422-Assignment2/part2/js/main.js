
/********************************************************************************* *  
 * WEB422 – Assignment 2 *  
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.   *
 *   No part of this assignment has been copied manually or electronically from any other source *  
 * (including web sites) or distributed to other students. *  
 *  Name: Krystyna Lopez Student ID: 146736178 Date: May 31,2019 * 
 * ********************************************************************************/ 
$(function(){
    let employeesModel=[];
initializeEmployeesModel();
$("#employee-search").on("keyup",function(event){
    let filtered=getFilteredEmployeesModel(this.value)
    refreshEmployeeRows(filtered);
})
$(document.body).on("click",'.body-row',function(e){
    let employee=getEmployeeModelById($(this).attr("data-id"));
    if(employee!=null){
        employee.HireDate=moment(employee.HireDate).format('LL');
        let modalContentTemplate=_.template(
            '<strong>Address:</strong><%- employee.AddressStreet %>,<%- employee.AddressCity %>,<%- employee.AddressState %>,<%- employee.AddressZip %><br>'+
            '<strong>Phone Number:</strong><%- employee.PhoneNum %>ext:<%- employee.Extension %></br>'+
            '<strong>Hire Date:</strong><%- employee.HireDate %>'
        );
        let modalContent=modalContentTemplate({'employee':employee});
        showGenericModal(employee.FirstName+ ' '+employee.LastName, modalContent)
    }
})
})


function initializeEmployeesModel(){
    $.ajax({
url:"https://aqueous-ridge-27689.herokuapp.com/employees",
type:"GET",
contentType:"application/json"
}) 
.done(function(data){
    employeesModel=data;  
    refreshEmployeeRows(employeesModel);
})
.fail(function(err){
showGenericModal('Error','Unable to get Employees');
})
}

function showGenericModal(title,message){
    $("#genericModal .modal-title").empty()
        .append(title);
    $("#genericModal .modal-body").empty()
        .append(message);
    $("#genericModal").modal('show');
};

function  refreshEmployeeRows(employees){
    $("#employees-table").empty();
    let template = _.template('<% _.forEach(employees,function(employee){%>'+
    '<div class="row body-row" data-id="<%- employee._id %>">' +
    '<div class="col-xs-4 body-column"><%- _.escape(employee.FirstName) %></div>'+
    '<div class="col-xs-4 body-column"><%- _.escape(employee.LastName) %></div>'+
    '<div class="col-xs-4 body-column"><%- _.escape(employee.Position.PositionName) %></div>'+
'</div>'+
'<% }); %>');
var tmp=template({'employees':employees});
$("#employees-table").append(tmp)
}

function  getFilteredEmployeesModel(filterString){
  let filterEmployee=_.filter(employeesModel,function(employee){
      if ( employee.FirstName.toLowerCase().includes(filterString.toLowerCase())||
        employee.LastName.toLowerCase().includes(filterString.toLowerCase())
        ||employee.Position.PositionName.toLowerCase().includes(filterString.toLowerCase()))
        return true;
        else return false;            
    })
    return filterEmployee; 
}

function  getEmployeeModelById(id){
    let filter= null;
    $.grep(employeesModel,function(employee,i){
if( employee._id==id){
    filter= _.cloneDeep(employee);
};
    })
   return filter;
}