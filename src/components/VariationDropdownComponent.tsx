import { useEffect, useState } from "react";

interface VarationListProps {
    index: string,
    value: string | number,
    display: string | null,
}

interface VariationProps {
    type: string,
    list: VarationListProps[],
}

const VariationDropdownComponent: React.FC<VariationProps> = (props: VariationProps) => {
    const dropdownTypes = ['sizes', 'colors'];
    const [isActive, setIsActive] = useState(false);
    let [selected, setSelected] = useState('');

    // Toggling Dropdown
    const toggleNextChild = () => {
        setIsActive(!isActive);
    }

    // Selecting item in dropdown
    const onSelectItem = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Add code here to select an item
        const selectedItem = event.currentTarget.textContent;
        setIsActive(!isActive);
        setSelected(selectedItem ?? '');
    }    

    // Checking if dropdown type exists
    const isValidDropdownType = dropdownTypes.includes(props.type);

    const runDownSelecteds = () => {
        let firstItem = props.list[0].value;
        setSelected(firstItem.toString());
    }

    useEffect(() => {
        runDownSelecteds();
    }, []);

    const sizeOutput = (size: number) => {
        switch (size) {
            case 1:
                return "XS";
            case 2:
                return "S";
            case 3:
                return "M";
            case 4:
                return "L";
            case 5:
                return "XL";
            case 6:
                return "XXL";
        }
    }

    return (
        <>
            {
            isValidDropdownType ?
                (
                    <div className="dropdown">
                        <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={toggleNextChild}>
                            <div className="d-flex dropdown-selected-label">
                                {
                                    props.type === 'sizes' ?
                                    <>
                                        <div>Size</div>
                                        <div className="selected">{sizeOutput(parseInt(selected))}</div>
                                    </>
                                    :
                                    <>
                                        <div>Color</div>
                                        <div className="selected">
                                            {
                                                selected !== null && selected !== '' ?
                                                (<div className="color-selected" style={{backgroundColor: selected}}></div>)
                                                : (<></>)
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </button>
                        <div className={`dropdown-menu ${isActive ? 'active' : ''}`}>
                            {
                                props.list.map((item, index) => (
                                    props.type === 'sizes' ?
                                    (<div className="dropdown-item" key={index} data-value={item.index} onClick={onSelectItem}>{sizeOutput(item.value as number)}</div>)
                                    :
                                    (<div className="dropdown-item" key={index} data-value={item.index} onClick={onSelectItem}>
                                        <div className="color-selected" style={{backgroundColor: item.value as string}}></div>
                                        <label>{item.display}</label>
                                    </div>)
                                ))
                            }
                        </div>
                    </div>
                )
                :
                (
                    <div>Invalid dropdown type</div>
                )
            }
        </>
    );
};

export default VariationDropdownComponent;
