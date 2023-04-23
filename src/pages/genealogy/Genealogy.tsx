import { IonAvatar, IonCol, IonContent, IonPage, IonRow } from "@ionic/react";
import Header from "../../components/HeaderComponent";
import genealogyTree, { GenealogyProps } from "../../models/Genealogy";

const Genealogy: React.FC = () => {
    let genealogyList = genealogyTree;

    let renderTree = [<IonRow key="mainTree">
            <IonCol>
                <IonAvatar>
                    <img src={genealogyList.user.profile_image} alt="" className="genealogy-avatar"/>
                </IonAvatar>
            </IonCol>
        </IonRow>];

    function buildTree(branches: GenealogyProps[], key: number | string) {
        renderTree.push(<IonRow key={key}>{generateSubTree(branches)}</IonRow>);

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

            subTree.push(<IonCol key={uniqueString(16)}>
                    <IonAvatar>
                        <img src={branch.user.profile_image} alt="" className="genealogy-avatar"/>
                    </IonAvatar>
                    <IonRow key={uniqueString(16)}>{generateSubTree(branch.downline)}</IonRow>
            </IonCol>);

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
                <div className="genealogy-container">
                    {buildTree(genealogyList.downline, genealogyList.id)}
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Genealogy;