@isTest
public class BeerControllerTest {
@isTest
    static void method1()
    { 
        BeerController b=new BeerController();
    }
    @isTest
    static void method2()
    { 
         BeerController.generateCardId();
    
    }
    @isTest
    static void method3()
    { 
         BeerController.addressDetails();
    
    }
    @isTest
    static void method4()
    { 
         BeerController.orderDetails('a075g000004k2ZZAAY');
    
    }
    @isTest
    static void method5()
    { 
         BeerController.saveAddress('Kadapa');
    
    }
}