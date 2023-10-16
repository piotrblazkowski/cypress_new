class pulpitPage{
    elements = {
        
      pageUrl : () => cy.url(),
      userNameLabelLocator : () => cy.get('a[data-testid="user-name"]'),
      transferReceiverDDList : () => cy.get('select[id="widget_1_transfer_receiver"]')

    }
  
    checkPageUrl(nextPage)
    {
        
        this.elements.pageUrl().should('eq', nextPage)
    }

    checkNameLabel(userName)
    {

        this.elements.userNameLabelLocator().should('have.text', userName);
    }

    checkValuesInTransferDDList()
    {
        this.elements.transferReceiverDDList().contains('Chuck Demobankowy')
    }

}
export default pulpitPage;