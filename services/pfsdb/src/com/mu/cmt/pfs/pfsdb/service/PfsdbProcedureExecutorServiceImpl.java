/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wavemaker.runtime.data.dao.procedure.WMProcedureExecutor;

import com.mu.cmt.pfs.pfsdb.models.procedure.*;

@Service
public class PfsdbProcedureExecutorServiceImpl implements PfsdbProcedureExecutorService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PfsdbProcedureExecutorServiceImpl.class);

    @Autowired
    @Qualifier("pfsdbWMProcedureExecutor")
    private WMProcedureExecutor procedureExecutor;

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr800pk0NewPshpBulkInsCtnResponse executeProcCr800pk0_NewPshpBulkInsCtn(String pordnum, String pshpnum, String plistctntype, String pprgid) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pListctntype", plistctntype);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("procCr800pk0_NewPshpBulkInsCtn", params, ProcCr800pk0NewPshpBulkInsCtnResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0Cr610pklQtyResponse executeProcCR1100PK0_CR610PklQty(String pordnum, String pshpnum, Integer ppshpnum) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_CR610PklQty", params, ProcCr1100pk0Cr610pklQtyResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0Cr600pcsCartonedResponse executeProcCR1100PK0_CR600PcsCartoned(String pordnum, String pgmtseq, Integer pclrseqg, String ptrncode) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pGmtseq", pgmtseq);
        params.put("pClrseqg", pclrseqg);
        params.put("pTrncode", ptrncode);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_CR600PcsCartoned", params, ProcCr1100pk0Cr600pcsCartonedResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcCr800pk0_BulkInsCtn(String pordnum, String pshpnum, String ppshpnum, String plistctntype, String pprgid) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pListctntype", plistctntype);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("procCr800pk0_BulkInsCtn", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcCR800PK0_FinaliseProvPKL(String pordnum, String pshpnum, String ppshpnum, String pprgid) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("procCR800PK0_FinaliseProvPKL", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0GetCartoningGmtClrDetResponse executeProcCR1100PK0_GetCartoningGmtClrDet(String pprgid, String pordnum, String pgmtseq, Integer pclrseqg) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pPrgid", pprgid);
        params.put("pOrdnum", pordnum);
        params.put("pGmtseq", pgmtseq);
        params.put("pClrseqg", pclrseqg);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_GetCartoningGmtClrDet", params, ProcCr1100pk0GetCartoningGmtClrDetResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Cr1100pk0fetchMenuItemsResponse executeCR1100pk0FetchMenuItems(String pordnum, String pshpnum, String ppshpnum) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);

        return procedureExecutor.executeNamedProcedure("CR1100pk0FetchMenuItems", params, Cr1100pk0fetchMenuItemsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Cr1100pk0fetchSizesResponse executeCR1100pk0FetchSizes(String pordnum) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pOrdnum", pordnum);

        return procedureExecutor.executeNamedProcedure("CR1100pk0FetchSizes", params, Cr1100pk0fetchSizesResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0Cr610pklQtyPerPackResponse executeProcCR1100PK0_CR610PklQtyPerPack(String pordnum, String pshpnum, Integer ppshpnum, String pseqcod) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pSeqcod", pseqcod);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_CR610PklQtyPerPack", params, ProcCr1100pk0Cr610pklQtyPerPackResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcCR800pk0_UnfinaliseProvPKL(String pordnum, String pshpnum, String ppshpnum, String punfinReason, String pprgid) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pUnfinReason", punfinReason);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("procCR800pk0_UnfinaliseProvPKL", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcCr800pk0DeleteCtntype(String pordnum, String pshpnum, String ppshpnum, String pctntype, Integer pseqnum, String pprgid) {
        Map<String, Object> params = new HashMap<>(6);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pCtntype", pctntype);
        params.put("pSeqnum", pseqnum);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("procCr800pk0DeleteCtntype", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr800pk0ProvpklCartonDefResponse executeProcCr800pk0_provpkl_cartonDef(String pordnum, String pshpnum, String ppshpnum, String pfilterOption) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pFilterOption", pfilterOption);

        return procedureExecutor.executeNamedProcedure("procCr800pk0_provpkl_cartonDef", params, ProcCr800pk0ProvpklCartonDefResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0GetCr210orderDetResponse executeProcCR1100PK0_GetCR210OrderDet(String pprgid, String pordnum) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pPrgid", pprgid);
        params.put("pOrdnum", pordnum);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_GetCR210OrderDet", params, ProcCr1100pk0GetCr210orderDetResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Sy006pk0callRepUrlResponse executeSy006pk0CallRepURL(String preportPath, String pparams, String pdesformat, String pparamForm) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pReportPath", preportPath);
        params.put("pParams", pparams);
        params.put("pDesformat", pdesformat);
        params.put("pParamForm", pparamForm);

        return procedureExecutor.executeNamedProcedure("sy006pk0CallRepURL", params, Sy006pk0callRepUrlResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0GetSht700detResponse executeProcCR1100PK0_GetSht700Det(String pprgid, String pordnum, String pshpnum, Integer ppshpnum) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pPrgid", pprgid);
        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPShpnum", ppshpnum);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_GetSht700Det", params, ProcCr1100pk0GetSht700detResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0Cr210pShpDetResponse executeProcCR1100PK0_CR210pShpDet(String pordnum) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pOrdnum", pordnum);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_CR210pShpDet", params, ProcCr1100pk0Cr210pShpDetResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0Cr400crtPexpQtyResponse executeProcCR1100PK0_CR400CrtPexpQty(String pordnum, String pshpnum) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_CR400CrtPexpQty", params, ProcCr1100pk0Cr400crtPexpQtyResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr800pk0QryProvPklResponse executeProcCr800pk0_qryProvPKL(String pordnum, String pshpnum, String ppshpnum, String pprgid) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("procCr800pk0_qryProvPKL", params, ProcCr800pk0QryProvPklResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcCr1100pk0GetOrt205detResponse executeProcCR1100PK0_GetOrt205Det(String pprgid, String pordnum, String pshpnum, String puserWmroleList) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pPrgid", pprgid);
        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pUserWMRoleList", puserWmroleList);

        return procedureExecutor.executeNamedProcedure("procCR1100PK0_GetOrt205Det", params, ProcCr1100pk0GetOrt205detResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcCr800pk0_bulkUpdProvPKLQty(String pordnum, String pshpnum, String ppshpnum, String prows, String pprgid) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pOrdnum", pordnum);
        params.put("pShpnum", pshpnum);
        params.put("pPshpnum", ppshpnum);
        params.put("pRows", prows);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("procCr800pk0_bulkUpdProvPKLQty", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Sy006pk0RunrepCallUrlResponse executeSy006pk0_runrepCallUrl(String preportPath, String pparams, String pdesformat, String pparamForm) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pReportPath", preportPath);
        params.put("pParams", pparams);
        params.put("pDesformat", pdesformat);
        params.put("pParamForm", pparamForm);

        return procedureExecutor.executeNamedProcedure("sy006pk0_runrepCallUrl", params, Sy006pk0RunrepCallUrlResponse.class);
    }

}