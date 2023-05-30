import { IonAvatar, IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import Header from "../../components/HeaderComponent";
import genealogyTree, { GenealogyProps } from "../../models/Genealogy";
import genealogyStyle from "../../css/Genealogy.module.css";
// import { Chart } from 'react-google-charts';
// import { useEffect } from 'react';

const Genealogy: React.FC = () => {
    let genealogyList = genealogyTree;
    // let limitDownlLineRow: Number = 3;
    // let maxDownlineLimitCol: Number = 10;

    let renderTree = [
        <IonRow  key="mainTree">
            <IonCol className={genealogyStyle['ion-col']}>
                <IonAvatar className={genealogyStyle['io-avatar']}>
                    <img src={genealogyList.user.profile_image} alt="" className={genealogyStyle['genealogy-avatar']}/>
                </IonAvatar>
            </IonCol>
        </IonRow>
    ];

    function buildTree(branches: GenealogyProps[], key: number | string) {
        renderTree.push(<IonRow  key={key}>{generateSubTree(branches)}</IonRow>);

        return (
            <>
                {renderTree}
            </>
        );
    }

    function generateSubTree(branches: GenealogyProps[])
    {
        const subTree: JSX.Element[] = [];
        for (let i = 0; i < branches.length; i++) {
            const branch = branches[i];

            subTree.push(
                <IonCol key={uniqueString(16)} className={genealogyStyle['ion-col']}>
                        <IonAvatar className={genealogyStyle['io-avatar']}>
                            <img src={branch.user.profile_image} alt="" className={genealogyStyle['genealogy-avatar']}/>
                        </IonAvatar>
                        <IonGrid>
                            <IonRow  key={uniqueString(16)}>{generateSubTree(branch.downline)}</IonRow>
                        </IonGrid>
                </IonCol>
            );

        }
        return subTree;
    }

    function uniqueString(length: number)
    {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }

    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Genealogy</h1>
                <hr className={genealogyStyle['hr']} />
                <div className={genealogyStyle['genealogy-container']}>
                    <div className={genealogyStyle['org-wrapper']}>
                        {buildTree(genealogyList.downline, genealogyList.id)}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Genealogy;