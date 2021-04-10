import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { InputText, InputNumber, InputDropdown } from '../../../components';

import { pillsEditToggle, pillsUpdate } from '../../../actions/pillsAction';

const PillRowEditor = ({ index, pill, pills }) => {
    const dispatch = useDispatch();

    const [sn, setSn] = useState(pill.sn);
    const [name, setName] = useState(pill.name);
    const [description, setDescription] = useState(pill.description);
    const [price, setPrice] = useState(pill.price);
    const [type, setType] = useState(pill.type);

    const [isValidSn, setIsValidSn] = useState(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidDescription, setIsValidDescription] = useState(true);
    const [isValidPrice, setIsValidPrice] = useState(true);

    const [canSubmit, setCanSubmit] = useState(true);

    let snAlreadyUse = [];
    pills.map((value) => {
        if (value.sn !== pill.sn) {
            snAlreadyUse.push(value.email);
        }
    });

    useEffect(() => {
        setCanSubmit(isValidSn && isValidName && isValidDescription && isValidPrice);
    }, [isValidSn && isValidName && isValidDescription && isValidPrice]);

    const submitHandler = () => {
        if (canSubmit) {
            dispatch(pillsUpdate({ ID: pill.ID, sn, name, description, price, type }));
        }
    };

    return (
        <tbody className="divide-y divide-gray-200">
            <tr>
                <td className="w-10 px-6 py-4 whitespace-nowrap text-gray-500 pl-10">{index}</td>
                <td className="w-28 px-6 py-4 whitespace-nowrap text-gray-500 ">
                    <InputText
                        id={`InputText-sn-${index}`}
                        name="sn"
                        type="text"
                        initValue={sn}
                        placeholder="SN 8 หลัก"
                        autoComplete="off"
                        required
                        minLength={8}
                        maxLength={8}
                        pattern="^[0-9]+$"
                        msgPatternError="ตัวเลข เท่านั้น"
                        dupList={snAlreadyUse}
                        msgDupError="SN ถูกใช้ไปแล้ว"
                        onValidChange={(state) => {
                            setIsValidSn(state);
                        }}
                        onValueChange={(state) => {
                            setSn(state);
                        }}
                    />
                </td>
                <td className="w-52 px-6 py-4 whitespace-nowrap text-gray-500">
                    <InputText
                        id={`InputText-name-${index}`}
                        name="name"
                        type="text"
                        initValue={name}
                        placeholder="ชื่อยา"
                        autoComplete="off"
                        required
                        minLength={1}
                        maxLength={50}
                        onValidChange={(state) => {
                            setIsValidName(state);
                        }}
                        onValueChange={(state) => {
                            setName(state);
                        }}
                    />
                </td>
                <td className="w-64 px-6 py-4 whitespace-nowrap text-gray-500">
                    <InputText
                        id={`InputText-description-${index}`}
                        name="description"
                        type="text"
                        initValue={description}
                        placeholder="คำอธิบาย"
                        autoComplete="off"
                        required
                        minLength={1}
                        maxLength={100}
                        onValidChange={(state) => {
                            setIsValidDescription(state);
                        }}
                        onValueChange={(state) => {
                            setDescription(state);
                        }}
                    />
                </td>
                <td className="w-36 px-6 py-4 whitespace-nowrap text-gray-500">
                    <InputNumber
                        id={`InputNumber-price-${index}`}
                        name="price"
                        initValue={price}
                        step="0.01"
                        min="0"
                        placeholder="ราคาต่อหน่วย"
                        required
                        onValidChange={(state) => {
                            setIsValidPrice(state);
                        }}
                        onValueChange={(state) => {
                            setPrice(state);
                        }}
                    />
                </td>
                <td className="w-28 px-6 py-4 whitespace-nowrap text-gray-500">
                    <InputDropdown
                        id={`InputDropdown-type-${index}`}
                        name="type"
                        optionList={['in', 'out']}
                        selectedIndex={['in', 'out'].indexOf(type)}
                        onValueChange={(state) => {
                            setType(state);
                        }}
                    />
                </td>
                <td className="w-20 px-6 py-4 whitespace-nowrap text-center font-medium">
                    <button
                        className={`focus:outline-none ${
                            canSubmit ? 'text-green-600 hover:text-green-900 hover:underline' : 'text-gray-400 cursor-not-allowed'
                        }`}
                        type="button"
                        onClick={submitHandler}
                        disabled={!canSubmit}
                    >
                        บันทึก
                    </button>
                </td>
                <td className="w-20 px-6 py-4 whitespace-nowrap text-center font-medium">
                    <button
                        className="text-gray-800 hover:text-gray-500 hover:underline focus:outline-none"
                        type="button"
                        onClick={() => {
                            dispatch(pillsEditToggle({ ID: pill.ID }));
                        }}
                    >
                        ยกเลิก
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default PillRowEditor;
