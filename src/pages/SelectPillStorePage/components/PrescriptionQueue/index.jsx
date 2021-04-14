import PrescriptionQueueTitle from './PrescriptionQueueTitle';
import PrescriptionQueueList from './PrescriptionQueueList';

const PrescriptionQueue = ({ prescriptions = [] }) => {
    return (
        <div className="flex flex-col h-5/6">
            <div className="bg-white shadow-md border-b-2 rounded-t-lg">
                <PrescriptionQueueTitle />
            </div>
            <div className="bg-white shadow-md border-b rounded-b-lg overflow-y-auto ">
                <PrescriptionQueueList prescriptions={prescriptions} />
            </div>
        </div>
    );
};

export default PrescriptionQueue;