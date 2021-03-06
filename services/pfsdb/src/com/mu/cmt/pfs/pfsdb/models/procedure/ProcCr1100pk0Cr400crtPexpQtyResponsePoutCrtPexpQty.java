/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCr1100pk0Cr400crtPexpQtyResponsePoutCrtPexpQty implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("SEQCOD")
    private String seqcod;

    @ColumnAlias("SZESEQ")
    private Byte szeseq;

    @ColumnAlias("QTYORD")
    private Integer qtyord;

    @ColumnAlias("W_CLRDES")
    private String wclrdes;

    @ColumnAlias("W_UNTFIN")
    private BigInteger wuntfin;

    @ColumnAlias("W_PEXP_FIN")
    private BigInteger wpexpFin;

    @ColumnAlias("W_SZEDES")
    private String wszedes;

    @ColumnAlias("W_UNTIN")
    private BigDecimal wuntin;

    @ColumnAlias("W_BALIN")
    private BigInteger wbalin;

    @ColumnAlias("W_PER_IN")
    private BigDecimal wperIn;

    @ColumnAlias("W_UNTOUT")
    private BigDecimal wuntout;

    @ColumnAlias("W_BALOUT")
    private BigInteger wbalout;

    @ColumnAlias("W_PER_OUT")
    private BigDecimal wperOut;

    @ColumnAlias("W_CDATEF")
    private LocalDateTime wcdatef;

    @ColumnAlias("W_CDATETO")
    private LocalDateTime wcdateto;

    @ColumnAlias("W_EDATEF")
    private LocalDateTime wedatef;

    @ColumnAlias("W_EDATETO")
    private LocalDateTime wedateto;

    @ColumnAlias("W_TOTQTY")
    private BigInteger wtotqty;

    @ColumnAlias("W_TOTIN")
    private BigInteger wtotin;

    @ColumnAlias("W_TOTBALCTN")
    private BigInteger wtotbalctn;

    @ColumnAlias("W_TOTOUT")
    private BigInteger wtotout;

    @ColumnAlias("W_TOTBALEXP")
    private BigInteger wtotbalexp;

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public String getSeqcod() {
        return this.seqcod;
    }

    public void setSeqcod(String seqcod) {
        this.seqcod = seqcod;
    }

    public Byte getSzeseq() {
        return this.szeseq;
    }

    public void setSzeseq(Byte szeseq) {
        this.szeseq = szeseq;
    }

    public Integer getQtyord() {
        return this.qtyord;
    }

    public void setQtyord(Integer qtyord) {
        this.qtyord = qtyord;
    }

    public String getWclrdes() {
        return this.wclrdes;
    }

    public void setWclrdes(String wclrdes) {
        this.wclrdes = wclrdes;
    }

    public BigInteger getWuntfin() {
        return this.wuntfin;
    }

    public void setWuntfin(BigInteger wuntfin) {
        this.wuntfin = wuntfin;
    }

    public BigInteger getWpexpFin() {
        return this.wpexpFin;
    }

    public void setWpexpFin(BigInteger wpexpFin) {
        this.wpexpFin = wpexpFin;
    }

    public String getWszedes() {
        return this.wszedes;
    }

    public void setWszedes(String wszedes) {
        this.wszedes = wszedes;
    }

    public BigDecimal getWuntin() {
        return this.wuntin;
    }

    public void setWuntin(BigDecimal wuntin) {
        this.wuntin = wuntin;
    }

    public BigInteger getWbalin() {
        return this.wbalin;
    }

    public void setWbalin(BigInteger wbalin) {
        this.wbalin = wbalin;
    }

    public BigDecimal getWperIn() {
        return this.wperIn;
    }

    public void setWperIn(BigDecimal wperIn) {
        this.wperIn = wperIn;
    }

    public BigDecimal getWuntout() {
        return this.wuntout;
    }

    public void setWuntout(BigDecimal wuntout) {
        this.wuntout = wuntout;
    }

    public BigInteger getWbalout() {
        return this.wbalout;
    }

    public void setWbalout(BigInteger wbalout) {
        this.wbalout = wbalout;
    }

    public BigDecimal getWperOut() {
        return this.wperOut;
    }

    public void setWperOut(BigDecimal wperOut) {
        this.wperOut = wperOut;
    }

    public LocalDateTime getWcdatef() {
        return this.wcdatef;
    }

    public void setWcdatef(LocalDateTime wcdatef) {
        this.wcdatef = wcdatef;
    }

    public LocalDateTime getWcdateto() {
        return this.wcdateto;
    }

    public void setWcdateto(LocalDateTime wcdateto) {
        this.wcdateto = wcdateto;
    }

    public LocalDateTime getWedatef() {
        return this.wedatef;
    }

    public void setWedatef(LocalDateTime wedatef) {
        this.wedatef = wedatef;
    }

    public LocalDateTime getWedateto() {
        return this.wedateto;
    }

    public void setWedateto(LocalDateTime wedateto) {
        this.wedateto = wedateto;
    }

    public BigInteger getWtotqty() {
        return this.wtotqty;
    }

    public void setWtotqty(BigInteger wtotqty) {
        this.wtotqty = wtotqty;
    }

    public BigInteger getWtotin() {
        return this.wtotin;
    }

    public void setWtotin(BigInteger wtotin) {
        this.wtotin = wtotin;
    }

    public BigInteger getWtotbalctn() {
        return this.wtotbalctn;
    }

    public void setWtotbalctn(BigInteger wtotbalctn) {
        this.wtotbalctn = wtotbalctn;
    }

    public BigInteger getWtotout() {
        return this.wtotout;
    }

    public void setWtotout(BigInteger wtotout) {
        this.wtotout = wtotout;
    }

    public BigInteger getWtotbalexp() {
        return this.wtotbalexp;
    }

    public void setWtotbalexp(BigInteger wtotbalexp) {
        this.wtotbalexp = wtotbalexp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCr1100pk0Cr400crtPexpQtyResponsePoutCrtPexpQty)) return false;
        final ProcCr1100pk0Cr400crtPexpQtyResponsePoutCrtPexpQty procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty = (ProcCr1100pk0Cr400crtPexpQtyResponsePoutCrtPexpQty) o;
        return Objects.equals(getOrdnum(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getOrdnum()) &&
                Objects.equals(getSeqcod(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getSeqcod()) &&
                Objects.equals(getSzeseq(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getSzeseq()) &&
                Objects.equals(getQtyord(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getQtyord()) &&
                Objects.equals(getWclrdes(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWclrdes()) &&
                Objects.equals(getWuntfin(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWuntfin()) &&
                Objects.equals(getWpexpFin(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWpexpFin()) &&
                Objects.equals(getWszedes(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWszedes()) &&
                Objects.equals(getWuntin(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWuntin()) &&
                Objects.equals(getWbalin(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWbalin()) &&
                Objects.equals(getWperIn(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWperIn()) &&
                Objects.equals(getWuntout(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWuntout()) &&
                Objects.equals(getWbalout(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWbalout()) &&
                Objects.equals(getWperOut(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWperOut()) &&
                Objects.equals(getWcdatef(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWcdatef()) &&
                Objects.equals(getWcdateto(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWcdateto()) &&
                Objects.equals(getWedatef(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWedatef()) &&
                Objects.equals(getWedateto(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWedateto()) &&
                Objects.equals(getWtotqty(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWtotqty()) &&
                Objects.equals(getWtotin(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWtotin()) &&
                Objects.equals(getWtotbalctn(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWtotbalctn()) &&
                Objects.equals(getWtotout(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWtotout()) &&
                Objects.equals(getWtotbalexp(), procCr1100pk0cr400crtPexpQtyResponsePoutCrtPexpQty.getWtotbalexp());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getSeqcod(),
                getSzeseq(),
                getQtyord(),
                getWclrdes(),
                getWuntfin(),
                getWpexpFin(),
                getWszedes(),
                getWuntin(),
                getWbalin(),
                getWperIn(),
                getWuntout(),
                getWbalout(),
                getWperOut(),
                getWcdatef(),
                getWcdateto(),
                getWedatef(),
                getWedateto(),
                getWtotqty(),
                getWtotin(),
                getWtotbalctn(),
                getWtotout(),
                getWtotbalexp());
    }
}