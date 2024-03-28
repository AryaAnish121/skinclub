import Users from "./tabs/Users";
import Appointments from "./tabs/Appointments";
import Transactions from "./tabs/Transactions";
import Inventory from "./tabs/Inventory";
import PatientRecords from "./tabs/PatientRecords";
import DoctorPerformance from "./tabs/DoctorPerformance";

const Table = ({tab, data}) => {
    if (tab == "users")
        return <Users data={data[tab]} />;
    else if (tab == "appointments")
        return <Appointments data={data[tab]} />;
    else if (tab == "transactions")
        return <Transactions data={data[tab]} />
    else if (tab == "inventory")
        return <Inventory data={data[tab]} />
    else if (tab == "patientRecords")
        return <PatientRecords data={data[tab]} />
    else if (tab == "doctorPerformance")
        return <DoctorPerformance data={data[tab]} />
}

export default Table;