import React from "react";

interface CompanyInterface{
    newCompany: string;
    setNewCompany: (value: string) => void;
}

export const NewCompanyContext = React.createContext<CompanyInterface>({
    newCompany: "",
    setNewCompany: (value) => { },
});


export const NewCompanyContextComponent: React.FC = (props) => {
    const [newCompany, setNewCompany] = React.useState("Lemoncode");
    return (
        <NewCompanyContext.Provider value={{ newCompany, setNewCompany }}>
            {props.children}
        </NewCompanyContext.Provider>
    )
};