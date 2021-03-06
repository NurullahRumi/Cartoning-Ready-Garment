/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCr1100pk0Cr610pklQtyPerPackResponse implements Serializable {


    @ColumnAlias("poutpackSze")
    private List<ProcCr1100pk0Cr610pklQtyPerPackResponsePoutpackSze> poutpackSze;

    public List<ProcCr1100pk0Cr610pklQtyPerPackResponsePoutpackSze> getPoutpackSze() {
        return this.poutpackSze;
    }

    public void setPoutpackSze(List<ProcCr1100pk0Cr610pklQtyPerPackResponsePoutpackSze> poutpackSze) {
        this.poutpackSze = poutpackSze;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCr1100pk0Cr610pklQtyPerPackResponse)) return false;
        final ProcCr1100pk0Cr610pklQtyPerPackResponse procCr1100pk0cr610pklQtyPerPackResponse = (ProcCr1100pk0Cr610pklQtyPerPackResponse) o;
        return Objects.equals(getPoutpackSze(), procCr1100pk0cr610pklQtyPerPackResponse.getPoutpackSze());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutpackSze());
    }
}