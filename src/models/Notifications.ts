enum NotificationStatus {
    pending,
    delivered,
    inCustom
}

interface Notification {
    id: number,
    status: NotificationStatus,
    date: Date,
    product_name: string,
    notificaiton_title: string,
    description: string,
    img: string
}

const notifications: Notification[] = [{
    id: 1,
        status: NotificationStatus.delivered,
        product_name: 'Some Item',
        date: new Date('06/23/2023'),
        notificaiton_title: 'Your Parcel has been delivered',
        description: `<span>Order # 6123987215489213</span>
        <span>Tracking # MP243234</span>`,
        img: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },{
        id: 2,
        status: NotificationStatus.pending,
        date: new Date('02/23/2023'),
        product_name: 'Some Item',
        notificaiton_title: 'Your Parcel is pending',
        description: `<span>Order # 6123987215489213</span>
        <span>Tracking # MP243234</span>`,
        img: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },{
        id: 2,
        status: NotificationStatus.pending,
        date: new Date('02/23/2023'),
        product_name: 'Some Item',
        notificaiton_title: 'Your Parcel is pending',
        description: `<span>Order # 6123987215489213</span>
        <span>Tracking # MP243234</span>`,
        img: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },{
        id: 2,
        status: NotificationStatus.pending,
        date: new Date('02/23/2023'),
        product_name: 'Some Item',
        notificaiton_title: 'Your Parcel is pending',
        description: `<span>Order # 6123987215489213</span>
        <span>Tracking # MP243234</span>`,
        img: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },{
        id: 2,
        status: NotificationStatus.pending,
        date: new Date('02/23/2023'),
        product_name: 'Some Item',
        notificaiton_title: 'Your Parcel is pending',
        description: `<span>Order # 6123987215489213</span>
        <span>Tracking # MP243234</span>`,
        img: "https://ionicframework.com/docs/img/demos/avatar.svg"
    }
];


export default class NotificationClass {
    public notificationList()
    {
        return notifications;
    }

    public getStatusString(status: NotificationStatus): string {
        switch (status) {
            case NotificationStatus.pending:
                return "Pending";
            case NotificationStatus.delivered:
                return "Delivered";
            case NotificationStatus.inCustom:
                return "In Custom";
            default:
                return "";
        }
    }
    
}