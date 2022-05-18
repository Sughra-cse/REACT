import { Component } from "react";
import Filter from "./Filter";
import CustomerRow from "./CustomerRow";

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ],
    };
   
    //behaviour
    deleteCustomer(id) {

    }
    filterCustomers(txt) {

    }
    render() {
        return <div>
            <Filter />
            {
                this.state.customers.map( c => <CustomerRow customer={c}/>)
            }
        </div>
    }
}