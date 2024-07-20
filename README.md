# Salesforce-Platform-Events-Superbadge-Unit
Platform Events Superbadge Unit What You'll Be Doing to Earn This Superbadge Adjust a flow to subscribe to Platform Event messages. Subscribe to Platform Event notifications with an Apex trigger. Listen to event messages with a Lightning web component. Concepts Tested in This Superbadge Platform Events

**Subscribe to Mission Allocation Events**
<img width="1465" alt="Screenshot 2024-07-20 at 11 40 34 PM" src="https://github.com/user-attachments/assets/6e8c10da-44a4-49ce-ba11-03617877c128">
<img width="1436" alt="Screenshot 2024-07-20 at 11 40 55 PM" src="https://github.com/user-attachments/assets/bffeb789-29fa-4c46-93bb-6e6eb4951bd1">

**CHALLENGE 1 Flow**

Prerequities 

1. You need to create Record Type value for Mission_Allocation__e to capture event message while resuming flow
2. Make sure you have enable setting in your org step to follow to verify
  1. Quick Find > Process Automation Settings >**Let users pause flows** Screenshot Refer

<img width="1469" alt="Screenshot 2024-07-20 at 11 47 04 PM" src="https://github.com/user-attachments/assets/7137c747-07ca-4567-a170-b90f4c628d77">



Update Step

<img width="1728" alt="Screenshot 2024-07-20 at 11 42 04 PM" src="https://github.com/user-attachments/assets/44b87733-ece1-49ef-a4b4-99fe162a8127">

Get Mission Step
<img width="1717" alt="Screenshot 2024-07-20 at 11 42 21 PM" src="https://github.com/user-attachments/assets/e5215f4f-7925-47b9-9278-5b3ae4690980">

Wait element Step

No Condition to wait - keep always wait

<img width="1722" alt="Screenshot 2024-07-20 at 11 42 55 PM" src="https://github.com/user-attachments/assets/1d0903de-f9ac-4653-8861-e65571224e16">

Condition to Resume Flow

<img width="1177" alt="Screenshot 2024-07-20 at 11 43 33 PM" src="https://github.com/user-attachments/assets/6b62b35a-f66b-4962-8b76-493259fd5486">

Upload Pilot with excepted values 

<img width="1715" alt="Screenshot 2024-07-20 at 11 44 17 PM" src="https://github.com/user-attachments/assets/ce1f76e7-ac64-46d7-a801-270487c7f3cb">
