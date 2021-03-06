/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCr1100pk0Cr600pcsCartonedResponse implements Serializable {


    @ColumnAlias("poutPshpList")
    private List<ProcCr1100pk0Cr600pcsCartonedResponsePoutPshpList> poutPshpList;

    public List<ProcCr1100pk0Cr600pcsCartonedResponsePoutPshpList> getPoutPshpList() {
        return this.poutPshpList;
    }

    public void setPoutPshpList(List<ProcCr1100pk0Cr600pcsCartonedResponsePoutPshpList> poutPshpList) {
        this.poutPshpList = poutPshpList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCr1100pk0Cr600pcsCartonedResponse)) return false;
        final ProcCr1100pk0Cr600pcsCartonedResponse procCr1100pk0cr600pcsCartonedResponse = (ProcCr1100pk0Cr600pcsCartonedResponse) o;
        return Objects.equals(getPoutPshpList(), procCr1100pk0cr600pcsCartonedResponse.getPoutPshpList());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPshpList());
    }
}