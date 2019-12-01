import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from 'reduxs'
import { DetailScreen } from 'screens'
import { number } from 'prop-types';

export function DetailContainer() {

    return listsMovies.lists.length > 0 ? (
        <>
            <DetailScreen

            />
        </>
    ) : (
            <>
            </>
        )

}