import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Row, Col, Checkbox } from 'antd'
import customLabel from '../../../features/utils/CustomLabel'
import { ErrorCheck } from '../Error/ErrorCheck'
import {
  setTMinDistance,
  setTMaxDistance,
  setTMinArea,
  setTMaxArea,
  setTHospitalExist,
  setTStationExist,
  setErrorMessage
} from '../../../features/filter/OptionReducer'

import './options.css'

const TownOptions = () => {
  const [enabled, setEnabled] = useState(true)
  const [t_min_distance, set_t_min_distance] = useState('')
  const [t_max_distance, set_t_max_distance] = useState('')
  const [t_min_area, set_t_min_area] = useState('')
  const [t_max_area, set_t_max_area] = useState('')
  const [t_hospital_exist, set_t_hospital_exist] = useState(false)
  const [t_station_exist, set_t_station_exist] = useState(false)

  const dispatch = useDispatch()

  const onChangeTMinDistance = e => {
    const value = e.target.value
    dispatch(setTMinDistance(value))
    set_t_min_distance(value)
  }
  const onChangeTMaxDistance = e => {
    const value = e.target.value
    dispatch(setTMaxDistance(value))
    set_t_max_distance(value)
  }
  const onChangeTMinArea = e => {
    const value = e.target.value
    dispatch(setTMinArea(value))
    set_t_min_area(value)
  }
  const onChangeTMaxArea = e => {
    const value = e.target.value
    dispatch(setTMaxArea(value))
    set_t_max_area(value)
  }
  const onChangeTHospitalExist = e => {
    const value = e.target.checked
    dispatch(setTHospitalExist(value))
    set_t_hospital_exist(value)
  }

  const onChangeTStationExist = e => {
    const value = e.target.checked
    dispatch(setTStationExist(value))
    set_t_station_exist(value)
  }

  const options = useSelector(state => state, [])
  dispatch(setErrorMessage(ErrorCheck(options)))

  return (
    <>
      <div
        style={{
          paddingLeft: 24,
        }}
      >
        <Row gutter={[6]}>
          <Col xs={6}>
            <span className='option-title'>Distance</span>
          </Col>
          <Col xs={18}>
            <Row gutter={[6]}>
              {/* <Col xs={12}>
                <Form.Item
                  label={customLabel('Min Distance', true, null, enabled)}
                  name="T_Min_Distance"
                  rules={[{ required: false }]}
                >
                  <Input
                    type='number'
                    onChange={onChangeTMinDistance}
                    placeholder="0.0"
                    suffix={'Km'}
                    disabled={!enabled}
                    value={t_min_distance}
                  />
                </Form.Item>
              </Col> */}
              <Col xs={12}>
                <Form.Item
                  label={customLabel('Max Distance', true, null, enabled)}
                  name="T_Max_Distance"
                  rules={[{ required: false }]}
                >
                  <Input
                    type='number'
                    onChange={onChangeTMaxDistance}
                    placeholder="0.0"
                    suffix={'Km'}
                    disabled={!enabled}
                    value={t_max_distance}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[6]}>
          <Col xs={6}>
            <span className='option-title'>Area</span>
          </Col>
          <Col xs={18}>
            <Row gutter={[6]}>
              <Col xs={12}>
                <Form.Item
                  label={customLabel('Min Area', true, null, enabled)}
                  name="T_Min_Area"
                  rules={[{ required: false }]}
                >
                  <Input
                    type='number'
                    onChange={onChangeTMinArea}
                    placeholder="0.0"
                    suffix={'ha'}
                    disabled={!enabled}
                    value={t_min_area}
                  />
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item
                  label={customLabel('Max Area', true, null, enabled)}
                  name="T_Max_Area"
                  rules={[{ required: false }]}
                >
                  <Input
                    type='number'
                    onChange={onChangeTMaxArea}
                    placeholder="0.0"
                    suffix={'ha'}
                    disabled={!enabled}
                    value={t_max_area}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[6]}>
          <Col xs={6}>
            <span className='option-title'>Others</span>
          </Col>
          <Col xs={18}>
            <Row gutter={[6]}>
              <Col xs={8}>
                <Checkbox onChange={onChangeTHospitalExist} checked={t_hospital_exist}>Hospital</Checkbox>
              </Col>
              <Col xs={8}>
                <Checkbox onChange={onChangeTStationExist} checked={t_station_exist}>Station</Checkbox>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default TownOptions