$('select[name="select_dept"]').on('change',function(){
   var selectedVal = $(this).val();
   switch(selectedVal){
       case 'Geek Squad':
                   $('.AF_skill').hide();
                   $('.GS_skill').show();
                   $('.marketing_skill').hide();
             break;
       case 'Marketing':case 'Marketing':
                   $('.GS_skill').hide();
                   $('.AF_skill').hide();
                   $('.marketing_skill').show();
             break;
       case 'Choose...':case 'Choose...':
                   $('.GS_skill').hide();
                   $('.AF_skill').hide();
                   $('.marketing_skill').hide();
             break;
       case 'Accounting/Finance':case 'Accounting/Finance':
                   $('.GS_skill').hide();
                   $('.AF_skill').show();
                   $('.marketing_skill').hide();
             break;
      default: //change this according to your need
             break;
   }
});