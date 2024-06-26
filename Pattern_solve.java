
class Pattern_solve{
    public static void main(String args[]){
      
        //    * * * * * 
        //    * * * * * 
        //    * * * * *
        //    * * * * *
        // for (int i = 0; i < 4; i++) {
        //     for (int j = 0; j <5; j++) {
        //         System.out.print(" *");    
        //     }
        //     System.out.println(" "); 
        // }
//----------------------------------------------------------
        //    * * * * * 
        //    *       * 
        //    *       *
        //    * * * * *
    //     int n=4;
    //     int m=5;
    //     for (int i = 1; i <= n; i++) {
    //        // System.out.print(" *");
    //       for (int j = 1; j <= m; j++) {
    //         //cell--> (i,j)
    //         if(i==1 || j == 1 || i == n || j == m){
    //          System.out.print(" *");
    //         }
    //         else{
    //             System.out.print("  ");
    //         }
    //     }
    //     System.out.println();
    // }
//--------------------------------------------------
        //    * 
        //    * * 
        //    * * * 
        //    * * * * 
    // for (int i = 0; i < 5; i++) {
    //     for (int j = 0; j <i; j++) {
    //         System.out.print(" *");    
    //     }
    //     System.out.println(" "); 
    // }
//----------------------------------------------------
        //    * * * *
        //    * * *
        //    * * 
        //    *  
    // for (int i = 4; i >0; i--) {
    //     for (int j = 0; j <i; j++) {
    //         System.out.print(" *");    
    //     }
    //     System.out.println(" "); 
    // }
//------------------------------------
        //         *
        //       * *
        //     * * * 
        //   * * * *  
        // for (int i = 1; i <=4; i++) {
        //     for (int j = 1; j<=4-i; j++) {
        //         System.out.print(" ");    
        //     }
        //       for (int j = 1; j<=i; j++) {
        //         System.out.print("*");    
        //       }
        //     System.out.println(); 
        // }
//--------------------------------------------------
        //    1 
        //    1 2
        //    1 2 3
        //    1 2 3 4 
        //    1 2 3 4 5
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <=i; j++) {
            System.out.print(j+" ");    
        }
        System.out.println(" "); 
    }

    }
}