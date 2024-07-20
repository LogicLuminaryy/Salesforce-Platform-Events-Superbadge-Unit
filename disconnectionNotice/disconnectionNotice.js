import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { subscribe, unsubscribe } from 'lightning/empApi';

export default class DisconnectionNotice extends LightningElement {
    @track status;
    @track identifier;
    subscription = {};
    channelName = '/event/Asset_Disconnection__e';

    connectedCallback() {
        this.handleSubscribe();
    }

     handleSubscribe() {
        // Callback invoked whenever a new event message is received
        const messageCallback = function (response) {
            console.log('New message received: ', JSON.stringify(response));
            const assetId = message.data.payload.Asset_Identifier__c;
            const isDisconnected = message.data.payload.Disconnected__c;

            if (isDisconnected) {
                this.showSuccessToast(assetId);
            } else {
                this.showErrorToast();
            }
        };

        subscribe(this.channelName, -1, messageCallback).then((response) => {
            // Response contains the subscription information on subscribe call
            console.log(
                'Subscription request sent to: ',
                JSON.stringify(response.channel)
            );
        });

        subscribe(this.channelName, -1, this.messageCallback)
            .then(response => {
                this.subscription = response;
                console.log('Subscribed to channel:', this.channelName);
            })
            .catch(error => {
                console.error('Subscription error:', error);
            });
    }

  

    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    handleUnsubscribe() {
        if (this.subscription) {
            unsubscribe(this.subscription)
                .then(() => {
                    console.log('Unsubscribed from channel');
                    this.subscription = null;
                })
                .catch(error => {
                    console.error('Unsubscribe error:', error);
                });
        }
    }

    showSuccessToast(assetId) {
        const event = new ShowToastEvent({
            title: 'Success',
            message: `Asset Id ${assetId} is now disconnected`,
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }

    showErrorToast() {
        const event = new ShowToastEvent({
            title: 'Error',
            message: 'Asset was not disconnected. Try Again.',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
}