/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Cr1100pk0fetchSizesResponsePoutSizeList implements Serializable {


    @ColumnAlias("SZESEQDES")
    private String szeseqdes;

    public String getSzeseqdes() {
        return this.szeseqdes;
    }

    public void setSzeseqdes(String szeseqdes) {
        this.szeseqdes = szeseqdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Cr1100pk0fetchSizesResponsePoutSizeList)) return false;
        final Cr1100pk0fetchSizesResponsePoutSizeList cr1100pk0fetchSizesResponsePoutSizeList = (Cr1100pk0fetchSizesResponsePoutSizeList) o;
        return Objects.equals(getSzeseqdes(), cr1100pk0fetchSizesResponsePoutSizeList.getSzeseqdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getSzeseqdes());
    }
}