const AccountRowDisplay = ({ index, account, onEditClick }) => {
    const deleteHandler = () => {
        //For Debug
        console.log('>> Delete Click! ' + account.ID);

        /*
            Logic here!
        */
    };

    return (
        <tbody className="divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 pl-10">{index}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{account.ID}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{account.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{account.surname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{account.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{account.username}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    <p>{account.role}</p>
                    <p className="text-gray-400 italic">ระดับ : {account.role_level}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-medium">
                    <button class="text-indigo-600 hover:text-indigo-900 hover:underline focus:outline-none" type="button" onClick={onEditClick}>
                        แก้ไข
                    </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-medium">
                    <button className="text-red-600 hover:text-red-900 hover:underline focus:outline-none" type="button" onClick={deleteHandler}>
                        ลบ
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default AccountRowDisplay;