import { useState } from "react";

interface VarationListProps {
    index: string,
    value: string | number
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
    return (
        <>
            {
            isValidDropdownType ?
                (
                    <div className="dropdown">
                        <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={toggleNextChild}>
                            <div className="d-flex dropdown-selected-label">
                                {
                                    props.type == 'sizes' ?
                                    <>
                                        <div>Size</div>
                                        <div className="selected">{selected}</div>
                                    </>
                                    :
                                    <>
                                        <div>Color</div>
                                        <div className="selected">
                                            {
                                                selected != null && selected != '' ?
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
                                    props.type == 'sizes' ?
                                    (<div className="dropdown-item" key={index} data-value={item.index} onClick={onSelectItem}>{item.value}</div>)
                                    :
                                    (<div className="dropdown-item" key={index} data-value={item.index} onClick={onSelectItem}>
                                        <div className="color-selected" style={{backgroundColor: item.index}}></div>
                                        <label>{item.value}</label>
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
