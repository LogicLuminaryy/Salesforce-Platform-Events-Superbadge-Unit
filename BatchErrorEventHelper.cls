public class BatchErrorEventHelper {

    public static void handleBatchErrorEvents(List<BatchApexErrorEvent> events) {
        List<Error_Log__c> errorLogs = new List<Error_Log__c>();
        
        for (BatchApexErrorEvent event : events) {
            Error_Log__c errorLog = new Error_Log__c();
            errorLog.Name = 'Batch Error';
            errorLog.Async_Apex_Job_Id__c = event.AsyncApexJobId;
            errorLog.Message__c = event.Message;
            errorLogs.add(errorLog);
        }
        
        if (!errorLogs.isEmpty()) {
            insert errorLogs;
        }
    }
}