/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import com.mu.cmt.pfs.pfsdb.models.procedure.*;

public interface PfsdbProcedureExecutorService {

    ProcCr800pk0NewPshpBulkInsCtnResponse executeProcCr800pk0_NewPshpBulkInsCtn(String pordnum, String pshpnum, String plistctntype, String pprgid);

    ProcCr1100pk0Cr610pklQtyResponse executeProcCR1100PK0_CR610PklQty(String pordnum, String pshpnum, Integer ppshpnum);

    ProcCr1100pk0Cr600pcsCartonedResponse executeProcCR1100PK0_CR600PcsCartoned(String pordnum, String pgmtseq, Integer pclrseqg, String ptrncode);

    Void executeProcCr800pk0_BulkInsCtn(String pordnum, String pshpnum, String ppshpnum, String plistctntype, String pprgid);

    Void executeProcCR800PK0_FinaliseProvPKL(String pordnum, String pshpnum, String ppshpnum, String pprgid);

    ProcCr1100pk0GetCartoningGmtClrDetResponse executeProcCR1100PK0_GetCartoningGmtClrDet(String pprgid, String pordnum, String pgmtseq, Integer pclrseqg);

    Cr1100pk0fetchMenuItemsResponse executeCR1100pk0FetchMenuItems(String pordnum, String pshpnum, String ppshpnum);

    Cr1100pk0fetchSizesResponse executeCR1100pk0FetchSizes(String pordnum);

    ProcCr1100pk0Cr610pklQtyPerPackResponse executeProcCR1100PK0_CR610PklQtyPerPack(String pordnum, String pshpnum, Integer ppshpnum, String pseqcod);

    Void executeProcCR800pk0_UnfinaliseProvPKL(String pordnum, String pshpnum, String ppshpnum, String punfinReason, String pprgid);

    Void executeProcCr800pk0DeleteCtntype(String pordnum, String pshpnum, String ppshpnum, String pctntype, Integer pseqnum, String pprgid);

    ProcCr800pk0ProvpklCartonDefResponse executeProcCr800pk0_provpkl_cartonDef(String pordnum, String pshpnum, String ppshpnum, String pfilterOption);

    ProcCr1100pk0GetCr210orderDetResponse executeProcCR1100PK0_GetCR210OrderDet(String pprgid, String pordnum);

    Sy006pk0callRepUrlResponse executeSy006pk0CallRepURL(String preportPath, String pparams, String pdesformat, String pparamForm);

    ProcCr1100pk0GetSht700detResponse executeProcCR1100PK0_GetSht700Det(String pprgid, String pordnum, String pshpnum, Integer ppshpnum);

    ProcCr1100pk0Cr210pShpDetResponse executeProcCR1100PK0_CR210pShpDet(String pordnum);

    ProcCr1100pk0Cr400crtPexpQtyResponse executeProcCR1100PK0_CR400CrtPexpQty(String pordnum, String pshpnum);

    ProcCr800pk0QryProvPklResponse executeProcCr800pk0_qryProvPKL(String pordnum, String pshpnum, String ppshpnum, String pprgid);

    ProcCr1100pk0GetOrt205detResponse executeProcCR1100PK0_GetOrt205Det(String pprgid, String pordnum, String pshpnum, String puserWmroleList);

    Void executeProcCr800pk0_bulkUpdProvPKLQty(String pordnum, String pshpnum, String ppshpnum, String prows, String pprgid);

    Sy006pk0RunrepCallUrlResponse executeSy006pk0_runrepCallUrl(String preportPath, String pparams, String pdesformat, String pparamForm);

}