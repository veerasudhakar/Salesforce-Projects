@isTest
public class accountCreationTest {
@isTest static void m1()
{
    accountCreation.accountInsert('sukanya');
    integer count=[Select count() from Account];
    system.assertEquals(1, count);
}
}